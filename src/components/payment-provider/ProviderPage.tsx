import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProviderAlert } from "./ProviderAlert";
import { SetupProvider } from "./SetupProvider";
import Header from "../Header";
import { useState } from "react";

const providerList = [
  {
    name: "Cash Free Payments",
    img_url: "../../src/assets/paymentLogos/upiLogo.png",
    isSetUp: true,
  },
  {
    name: "Razor Pay",
    img_url: "../../src/assets/paymentLogos/razorpayLogo.png",
    isSetUp: false,
  },
  {
    name: "Phone Pe",
    img_url: "../../src/assets/paymentLogos/phonepeLogo.png",
    isSetUp: false,
  },
  {
    name: "Paytm",
    img_url: "../../src/assets/paymentLogos/paytmLogo.png",
    isSetUp: false,
  },
];

// type CardProps = React.ComponentProps<typeof Card>;

export function ProviderPage({
  paymentProviderSetup,
  handlePaymentProviderSetup,
}: {
  paymentProviderSetup: boolean;
  handlePaymentProviderSetup: (paymentProviderSetup: boolean) => void;
}) {
  const [openSetup, setOpenSetup] = useState(false);
  function openSetupProvider(openSetup: boolean) {
    setOpenSetup(!openSetup);
  }
  console.log(openSetup);
  return (
    <div>
      <Header headerTitle="Payments" />
      <div className="w-[680px] mx-auto my-8 flex flex-col gap-8 items-end">
        <Card className={cn("w-[680px] ")}>
          <CardHeader>
            <CardTitle>Payment Providers</CardTitle>
            <CardDescription>
              Set up payment providers to accept payments from your customers.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              {providerList.map((provider, index) => (
                <div
                  className="flex items-center p-4 space-x-4 rounded-md "
                  key={index}
                >
                  <span>
                    <img src={provider?.img_url} alt={provider?.name}></img>
                  </span>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold text-[#1A181E] leading-none">
                      {provider?.name}
                    </p>
                  </div>
                  {provider?.isSetUp ? (
                    <>
                      <Button variant="outline">Detail</Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <img
                            src="../../src/assets/icons/Vector.svg"
                            alt="options"
                          ></img>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Deactivate</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Remove
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </>
                  ) : openSetup ? (
                    <SetupProvider provider={provider} />
                  ) : (
                    <ProviderAlert
                      provider={provider}
                      openSetup={openSetup}
                      openSetupProvider={openSetupProvider}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center p-4 space-x-4 rounded-md ">
              <span>
                <img src="../../src/assets/paymentLogos/COD logo.png"></img>
              </span>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-bold text-[#1A181E] leading-none">
                  Cash on Delivery
                </p>
                <p className="text-sm text-muted-foreground">
                  Receive payments in cash upon delivery.
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
        <Card className="flex items-center p-8 space-x-4 rounded-md ">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-bold text-[#1A181E] leading-none">
              Manual Payment Methods
            </p>
            <p className="text-sm text-muted-foreground text-[#808080]">
              Payments that are made outside online store. Allows you to accept
              cash, check or other custom forms of payment.
            </p>
          </div>
          <Switch />
        </Card>
        <Button
          variant="default"
          className="w-56 bg-red-600"
          value={paymentProviderSetup ? 0 : 1}
          onClick={(e) => {
            let i: boolean;
            if (parseInt((e.target as HTMLButtonElement).value)) i = true;
            else i = false;
            handlePaymentProviderSetup(i);
          }}
        >
          Click Here After walkthrough
        </Button>
      </div>
    </div>
  );
}
