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
import { Button } from "@/components/ui/button";

interface Provider {
  name: string;
  img_url: string;
  isSetUp: boolean;
}

export const ProviderAlert = ({
  provider,
  openSetup,
  openSetupProvider,
}: {
  provider: Provider;
  openSetup: boolean;
  openSetupProvider: (providerName: boolean) => void;
}) => {
  return (
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
            Setting up {provider?.name} will deactivate your current payment
            provider (Cashfree Payments) and all your new payments will be taken
            through {provider?.name}
          </AlertDialogDescription>
          <AlertDialogDescription className="text-center">
            Do you want to proceed and setup {provider?.name}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-5">
          <AlertDialogCancel className="border-sky-600 text-sky-600">
            No keep Exisiting
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-sky-600"
            value={openSetup}
            onClick={(e) => openSetupProvider(e.target.value)}
          >
            Continue with set up
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
