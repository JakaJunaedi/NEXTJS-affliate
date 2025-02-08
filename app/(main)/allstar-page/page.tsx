import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FolderClock, FileText, CalendarClock, Notebook } from "lucide-react";

export default function AllStarPage() {
    return(
        <div className="flex-1 p-8">
        <Card className="max-w-full mx-auto">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-red-500 mb-2">Allstars Prime</h2>
            <p className="text-gray-700 mb-4">
              Kesulitan kelola campaign influencer marketing sendirian? Jangan khawatir! Serahin aja ke ahlinya, Allstars Prime!
            </p>
            <p className="text-gray-700 mb-4">
              Nggak perlu pusing mikir campaign dan ngumpulin influencer. Tinggal kirim brief dan kami siap kelola campaign khusus untuk kamu.
            </p>
            <Button className="bg-red-500 text-white">Buat Brief Baru</Button>
            <Separator className="my-6" />
            <h3 className="text-lg font-bold mb-4">Keunggulan Allstars Prime</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <FolderClock className="text-red-500 w-6 h-6" />
                <div>
                  <p className="font-bold">Campaign 100% Dikelola Penuh oleh Allstars</p>
                  <p className="text-gray-600 text-sm">Duduk tenang sambil lihat campaign jalan. Santai aja, semua progress bisa dipantau lewat Allstars Prime!</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Notebook className="text-red-500 w-6 h-6" />
                <div>
                  <p className="font-bold">Report Serba Digital, Tanpa Download File Terpisah</p>
                  <p className="text-gray-600 text-sm">Anti ribet buka tabel ini itu. Bisa sambil rebahan dan tunggu hasil terbaru.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="text-red-500 w-6 h-6" />
                <div>
                  <p className="font-bold">Strategi dan Riset Mendalam Terbukti Tepat Sasaran</p>
                  <p className="text-gray-600 text-sm">Allstars berpengalaman menangani bermacam campaign influencer dari beragam brand di seluruh Indonesia.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CalendarClock className="text-red-500 w-6 h-6" />
                <div>
                  <p className="font-bold">Riwayat Campaign Dapat Diakses Tanpa Batas Waktu</p>
                  <p className="text-gray-600 text-sm">Jangan khawatir, riwayat campaign terdahulu sampai terkini semua lengkap ada disini.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
}