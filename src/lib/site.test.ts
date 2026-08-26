import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { absoluteUrl, normalizePath, siteOrigin } from './site';

describe('normalizePath', () => {
  it('normalises a catch-all segment array into a stored canonical path', () => {
    expect(normalizePath(['cars', 'tires', 'low-tire-pressure'])).toBe('/cars/tires/low-tire-pressure/');
  });

  it('collapses missing, extra and mixed-case slashes to one canonical form', () => {
    // Every one of these must hit the same database row rather than 404.
    expect(normalizePath('/cars/tires/')).toBe('/cars/tires/');
    expect(normalizePath('cars/tires')).toBe('/cars/tires/');
    expect(normalizePath('//cars//tires//')).toBe('/cars/tires/');
    expect(normalizePath('/Cars/Tires/')).toBe('/cars/tires/');
  });

  it('maps the site root to a single slash', () => {
    expect(normalizePath([])).toBe('/');
    expect(normalizePath('/')).toBe('/');
    expect(normalizePath('')).toBe('/');
  });
});

describe('absoluteUrl', () => {
  const original = process.env.NEXT_PUBLIC_SITE_URL;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://example.test';
  });

  afterEach(() => {
    process.env.NEXT_PUBLIC_SITE_URL = original;
  });

  it('builds canonical URLs from configuration, never a hard-coded domain', () => {
    expect(absoluteUrl('/cars/tires/low-tire-pressure/')).toBe(
      'https://example.test/cars/tires/low-tire-pressure/',
    );
  });

  it('tolerates a trailing slash in the configured origin', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://example.test/';
    expect(siteOrigin()).toBe('https://example.test');
    expect(absoluteUrl('/about/')).toBe('https://example.test/about/');
  });

  it('falls back to localhost when the origin is unset', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    expect(siteOrigin()).toBe('http://localhost:3000');
  });
});
