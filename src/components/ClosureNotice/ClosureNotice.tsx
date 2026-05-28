"use client";

import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./_closureNotice.scss";

const STORAGE_KEY = "closureNoticeDismissed";

export default function ClosureNotice() {
  const pathname = usePathname();
  // Root and /et are Estonian; only /en is English.
  const lang: "en" | "et" = pathname?.startsWith("/en") ? "en" : "et";
  const t = LanguageKeys[lang].closure;

  // null = not yet read from storage (avoids a flash before hydration)
  const [dismissed, setDismissed] = useState<boolean | null>(null);

  useEffect(() => {
    setDismissed(localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setDismissed(true);
  };

  if (dismissed === null) return null;

  return (
    <>
      <Dialog.Root open={!dismissed} onOpenChange={(open) => !open && handleClose()}>
        <Dialog.Content maxWidth="450px" className="closureNotice__dialog">
          <Dialog.Title align="center">{t.title}</Dialog.Title>
          <Dialog.Description size="3" mt="3" mb="5" align="center">
            {t.message}
          </Dialog.Description>
          <Flex justify="center">
            <Dialog.Close>
              <Button color="pink" variant="soft" size="3" onClick={handleClose}>
                {t.close}
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>

      <div className="closureNotice__banner" role="note">
        <Text size="4" align="center">
          {t.banner}
        </Text>
      </div>
    </>
  );
}
