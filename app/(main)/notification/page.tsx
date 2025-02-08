import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function NotificationPage() {
    return (
        <div className="flex-1 p-8">
        <Card className="max-w-full mx-auto">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-center mb-4">Notifikasi</h2>
            <Separator className="mb-4" />
            <div className="border-l-4 border-red-500 p-4 bg-gray-100 rounded-md">
              <p className="text-sm text-gray-700">
                Terima kasih telah bergabung sebagai Allstars Brand! Buat campaign untuk menaikkan awareness atau engagement brand kamu dengan bantuan puluhan ribu influencers yang terdaftar di Allstars.id.
              </p>
              <p className="text-xs text-gray-500 mt-2">06 Februari 2025 07:47:32</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
}