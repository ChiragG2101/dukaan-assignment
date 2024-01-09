import { BellIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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

type CardProps = React.ComponentProps<typeof Card>;

export function OtherForNow({ className, ...props }: CardProps) {
  return (
    <div className="w-[680px] mx-auto my-8 flex flex-col gap-8 items-end">
      <Card className={cn("w-[680px] ", className)} {...props}>
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
                        <img src="../../src/assets/icons/Vector.svg"></img>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Deactivate</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outlineblue">Set Up</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="place-items-center">
                      <img src="../../src/assets/icons/DialogIcon.png" alt="" />
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-center">
                          Setup {provider?.name}?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-center">
                          Setting up {provider?.name} will deactivate your
                          current payment provider (Cashfree Payments) and all
                          your new payments will be taken through{" "}
                          {provider?.name}
                        </AlertDialogDescription>
                        <AlertDialogDescription className="text-center">
                          Do you want to proceed and setup {provider?.name}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="mt-5">
                        <AlertDialogCancel className="border-sky-600 text-sky-600">
                          No keep Exisiting
                        </AlertDialogCancel>
                        <AlertDialogAction className="bg-sky-600">
                          Continue with set up
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
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
      <Button variant="default" className="w-24">
        Finish
      </Button>
    </div>
  );
}
