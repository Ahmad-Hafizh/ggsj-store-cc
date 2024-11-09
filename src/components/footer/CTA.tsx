import React from "react";
import ButtonCTA from "../Button";
import { FaPaperPlane } from "react-icons/fa6";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-full pb-10">
      <div className="flex w-full flex-col gap-10 rounded-xl bg-foreground p-6 text-white lg:grid lg:grid-cols-6 lg:items-center lg:p-10">
        <h2 className="text-left text-4xl font-semibold leading-6 lg:col-span-3 lg:text-7xl">
          <span>
            Let&apos;s discuss <br />
            with our Team
          </span>
        </h2>
        <p className="col-span-2 w-full">
          send our team messages via Whatsapp, we will respond immediately. we
          serve any request of any agriculture & marine products.
          <br />
          <br />
          feel free to ask, our regards.
        </p>
        <Link
          href="/"
          className="hidden h-full w-full flex-col items-center gap-4 rounded-xl bg-accent p-4 text-center text-foreground lg:flex"
        >
          <FaPaperPlane className="h-20 w-20" />
          <p className="text-2xl font-extrabold leading-5">
            Send
            <br />
            Message
          </p>
        </Link>
        <ButtonCTA href="/" className="!text-foreground lg:hidden">
          Send Messages
        </ButtonCTA>
      </div>
    </div>
  );
};

export default CTA;
