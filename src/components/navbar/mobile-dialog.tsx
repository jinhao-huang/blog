"use client";
import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";
import {
  HiOutlineBars3 as Bars3Icon,
  HiOutlineXMark as XMarkIcon,
} from "react-icons/hi2";

export default function MobileDialog({
  navigations,
  aria_dict,
}: {
  navigations: { name: string; href: string }[];
  aria_dict: {
    open_menu: string;
    close_menu: string;
  };
}) {
  return (
    <DialogTrigger>
      <Button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
      >
        <span className="sr-only">{aria_dict.open_menu}</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </Button>
      <Modal className="lg:hidden">
        <div className="fixed inset-0 z-10" />

        <Dialog className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10">
          {({ close }) => (
            <>
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">1BitBool</span>
                  <img
                    className="h-8 w-auto"
                    src="/assets/vercel.svg"
                    alt="1BitBool"
                  />
                </a>
                <Button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                  onPress={close}
                >
                  <span className="sr-only">{aria_dict.close_menu}</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigations.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
