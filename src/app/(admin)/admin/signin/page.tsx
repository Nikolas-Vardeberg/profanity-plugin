
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getSession, login, logout } from "@/lib/lib";
import { cn } from "@/lib/utils";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
    
  if(session) {
    redirect("/admin/dashboard")
    }


  return (
    <MaxWidthWrapper className="h-screen w-screen flex flex-col items-center justify-center text-center align-middle">
        <Card className="w-[400px]">
            <CardHeader>
                <div className="w-full flex flex-col gap-y-4 items-center justify-center">
                    <h1 className={cn("text-3xl font-semibold")}>
                        🔐 Auth
                    </h1>
                    <p className="text-muted-foreground text-md">
                        Welcome Back
                    </p>
                </div>
            </CardHeader>
            <CardContent>
                <form className="space-y-6 text-left"
                    action={async (formData) => {
                        "use server"
                        await login(formData);
                        redirect("/admin/dashboard")
                    }}
                >
                    <div className="space-y-4">
                        <Label>Email</Label>
                        <Input type="email" id="email" name="email" placeholder="email"/>
                    </div>
                    <div className="space-y-4">
                        <Label>Password</Label>
                        <Input type="password" id="password" name="password" placeholder="password"/>
                    </div>

                    <Button className="w-full" type="submit">
                        login
                    </Button>
                </form>
            </CardContent>
        </Card>
    </MaxWidthWrapper>
  );
}
