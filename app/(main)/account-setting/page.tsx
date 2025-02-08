import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { LogOut, Save } from "lucide-react";


export default function AccountSettings() {
  return (
    
      <div className="flex-1 p-8">
        <Card className="max-w-lg mx-auto">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-center mb-4">Pengaturan Akun</h2>
            <Separator className="mb-4" />
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">Edit Profil</Button>
              <Button variant="outline" className="w-full justify-start">Ubah Password</Button>
              <Button variant="outline" className="w-full justify-start">Daftar Brand</Button>
              <Button variant="destructive" className="w-full justify-center">
                <Save className="w-5 h-5 mr-2" /> Simpan
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6 text-xs text-gray-400">
          <p>Terms of Service &middot; Privacy Policy</p>
          <p>Copyright 2025 PT Formasi Agung Selaras</p>
        </div>
      </div>
    
  );
}
