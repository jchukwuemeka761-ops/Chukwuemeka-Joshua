import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BUSINESS_DATA,
  buildWhatsAppUrl,
  formatTelLink,
  validateBookingForm,
  generateWhatsAppInquiryMessage,
  getBusinessStatus,
} from './business-data';

test('BUSINESS_DATA contains complete accurate client details', () => {
  assert.equal(BUSINESS_DATA.name, 'J.Chukwuemeka Holdings');
  assert.equal(BUSINESS_DATA.phone, '+2349160408780');
  assert.equal(BUSINESS_DATA.whatsapp, '+2349160408780');
  assert.equal(BUSINESS_DATA.email, 'jchukwuemeka761@gmail.com');
  assert.equal(BUSINESS_DATA.address.area, 'Asokoro');
  assert.equal(BUSINESS_DATA.hours.length, 7);
  assert.equal(BUSINESS_DATA.services.length, 6);
});

test('buildWhatsAppUrl properly strips non-digit characters and encodes custom text', () => {
  const urlWithoutText = buildWhatsAppUrl('+2349160408780');
  assert.equal(urlWithoutText, 'https://wa.me/2349160408780');

  const urlWithText = buildWhatsAppUrl('+2349160408780', 'Hello from Asokoro');
  assert.equal(urlWithText, 'https://wa.me/2349160408780?text=Hello%20from%20Asokoro');
});

test('formatTelLink cleans string and keeps leading plus', () => {
  assert.equal(formatTelLink('+234 916 040 8780'), 'tel:+2349160408780');
  assert.equal(formatTelLink('+2349160408780'), 'tel:+2349160408780');
});

test('validateBookingForm flags missing name, phone, and service', () => {
  const invalid = validateBookingForm({});
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.serviceId);

  const valid = validateBookingForm({
    name: 'Chief Emeka',
    phone: '+2349160408780',
    serviceId: 'software-development',
    contactPreference: 'whatsapp',
    urgency: 'immediate',
    email: 'test@example.com',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('validateBookingForm validates email format when provided', () => {
  const badEmail = validateBookingForm({
    name: 'Chief Emeka',
    phone: '+2349160408780',
    serviceId: 'software-development',
    email: 'not-an-email',
  });
  assert.equal(badEmail.isValid, false);
  assert.ok(badEmail.errors.email);
});

test('generateWhatsAppInquiryMessage composes structured message with details', () => {
  const msg = generateWhatsAppInquiryMessage(
    {
      name: 'Amara Kalu',
      phone: '+2348012345678',
      email: 'amara@example.com',
      serviceId: 'courier-shipping',
      contactPreference: 'whatsapp',
      urgency: 'immediate',
      notes: 'Need express documents delivered within Abuja today.',
    },
    'Courier / Shipping'
  );

  assert.ok(msg.includes('J.Chukwuemeka Holdings'));
  assert.ok(msg.includes('Courier / Shipping'));
  assert.ok(msg.includes('Amara Kalu'));
  assert.ok(msg.includes('+2348012345678'));
  assert.ok(msg.includes('Need express documents delivered'));
});

test('getBusinessStatus returns open status 24/7', () => {
  const status = getBusinessStatus();
  assert.equal(status.isOpen, true);
  assert.ok(status.label.includes('24/7'));
});
