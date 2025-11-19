import { html, fixture, expect } from '@open-wc/testing';
import "../kenny-emporium.js";

describe("KennyEmporium test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <kenny-emporium
        title="title"
      ></kenny-emporium>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
