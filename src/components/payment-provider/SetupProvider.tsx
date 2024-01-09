import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Provider {
  name: string;
  img_url: string;
  isSetUp: boolean;
}
export function SetupProvider({
  provider,
  openSetup,
  openSetupProvider,
}: {
  provider: Provider;
  openSetup: boolean;
  openSetupProvider: (providerName: boolean) => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outlineblue">Set Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Up {provider?.name}</DialogTitle>
          <DialogDescription>
            Please enter your {provider?.name} API keys. You can find your API
            keys on {provider?.name} API Key Dashboard
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="name" className="text-left">
              API ID
            </Label>
            <Input
              id="name"
              placeholder="Enter merchant ID"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="name" className="text-left">
              Secret Key
            </Label>
            <Input
              id="name"
              placeholder="Enter Public Key"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-sky-600"
            value={openSetup ? 1 : 0}
            onClick={(e) => {
              let i: boolean;
              if (parseInt((e.target as HTMLButtonElement).value)) i = true;
              else i = false;
              openSetupProvider(i);
            }}
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
