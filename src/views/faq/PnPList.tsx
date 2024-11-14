import React from "react";

const PnPList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2">
      <div className="list">
        <p className="text-xl font-semibold">Information We Collect</p>
        <p>
          When you interact with our platform, we may collect the following
          personal information:
        </p>
        <ul className="list-inside list-disc">
          <li>Name</li>
          <li>Email Address</li>
        </ul>
      </div>
      <div className="list">
        <p className="text-xl font-semibold">How We Use Your Information</p>
        <p>We use the information we collect to:</p>
        <ul className="list-inside list-disc">
          <li>
            Send messages or updates related to your experience with our
            platform
          </li>
          <li>Provide customer support and respond to inquiries promptly</li>
        </ul>
      </div>
      <div className="list">
        <p className="text-xl font-semibold">
          Information Sharing and Disclosure
        </p>
        <p>
          We do not share, sell, rent, or otherwise disclose your information to
          third parties.
        </p>
      </div>
      <div className="list">
        <p className="text-xl font-semibold">Data Security</p>
        <p>
          We have implemented industry-standard security measures designed to
          protect your personal information from unauthorized access,
          disclosure, or misuse. While we strive to use commercially acceptable
          means to protect your information, no electronic transmission or
          storage method is 100% secure, and we cannot guarantee absolute
          security.
        </p>
      </div>
      <div className="list">
        <p className="text-xl font-semibold">Your Rights</p>
        <p>You have the right to:</p>
        <ul className="list-inside list-disc">
          <li>
            Access: Request a copy of the personal information we hold about
            you.
          </li>
          <li>
            Correction: Request corrections to inaccurate or incomplete
            information.
          </li>
          <li>
            Deletion: Request deletion of your personal information from our
            records.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at
          Business@ggsj.store or +62 858-2498-2913.
        </p>
      </div>
      <div className="list">
        <p className="text-xl font-semibold">Contact Us</p>
        <p>
          If you have questions or concerns about our Privacy Policy or data
          practices, please reach out to us:
        </p>
        <ul className="list-inside list-disc">
          <li>Email: Business@ggsj.store</li>
          <li>Phone: +62 858-2498-2913</li>
        </ul>
      </div>
      <div className="list">
        <p className="text-xl font-semibold">Changes to This Privacy Policy</p>
        <p>
          We may update this Privacy Policy periodically. Any changes will be
          posted on this page, and we encourage you to review this Privacy
          Policy regularly. Continued use of our service after changes to the
          Privacy Policy constitutes your acceptance of the new terms.
        </p>
      </div>
      <p>Effective Date: November 14, 2024</p>
    </div>
  );
};

export default PnPList;
