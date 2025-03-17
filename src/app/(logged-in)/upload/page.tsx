import BgGradient from "@/components/common/bg-gradient";
import UploadForm from "@/components/upload/upload-form";
import UploadHeader from "@/components/upload/upload-header";

export default function UploadPage() {
    return (
        <section className="min-h-screen">
            <BgGradient />
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8
            lg:pt-12">
                <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <UploadHeader />
                    <UploadForm />
                </div>
            </div>
        </section>
    );
}