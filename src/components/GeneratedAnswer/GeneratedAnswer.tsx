import { ReactComponent as AirDropIcon } from "@/assets/actions/airdrop.svg?react";
import { parseMarkdownLite } from "@/utils/parseMarkdownLite";
import Accordion from "../common/Accordion/Accordion";
import Chips from "../common/Chips/Chips";

type Props = {};

const GeneratedAnswer = (props: Props) => {
  const string = `**Dear user**,\nThank you for reaching out to us. I understand that you're looking to test your mobile apps and websites on a variety of real iOS devices, and I'm here to assist you in getting started with our platform.\n\nTo begin testing your iOS apps on iPhones using TestFlight, please follow these steps:\n1. Sign up for App Live if you haven't already done so.\n2. Log in to your App Live account.\n3. Click on "View All Sources" at the bottom of the menu.\n4. Select "Install via TestFlight."\n5. Choose the iPhone model you wish to test your app on from the extensive list of supported devices.\n6. Start a test session.\n\nIf Two-factor authentication is enabled for your Apple ID, please follow the following:\n1. Open the App Store.\n2. Click on the Blue User icon at the top right corner of the App Home Page.\n3. Enter your Apple ID and Password when prompted.\n\nLet me know if you want this in a different format or if you need help with the next steps.\n\n**Best Regards,**\nXcelerate Support\n\n[iPhone](https://google.com) [Docs](https://google.com) [Live](https://google.com)`;

  const { html, links } = parseMarkdownLite(string);

  console.log("links", links);

  return (
    <Accordion icon={AirDropIcon} title="Generated Answer">
      <div className="p-2.5 flex flex-col space-y-2.5">
        <p
          className="text-color-1000 font-normal text-xs"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {links.length > 0 && (
          <div className="flex flex-wrap gap-2.5">
            {links.map((link, i) => (
              <Chips key={i} type="LINK" label={link.text} href={link.url} />
            ))}
          </div>
        )}
      </div>
    </Accordion>
  );
};

export default GeneratedAnswer;
