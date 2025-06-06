import MainFormLeftSide from "@/layout/authentication/main-form-left-side";

export default function AuthenticationGroupLayout({
                                                      children,
                                                  }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="my-10">
            <div className="main-form grid grid-cols-10 w-full min-h-[80vh]">
                <div className="left-side hidden lg:block lg:col-span-5 xl:col-span-6">
                    <MainFormLeftSide></MainFormLeftSide>
                </div>
                <div className="right-side col-span-10 lg:col-span-5 xl:col-span-4">
                    <div className="flex flex-col items-center justify-center min-h-full">
                        <div className="w-6/7 sm:w-5/7 md:w-4/7 lg:w-5/7 2xl:w-4/7">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
