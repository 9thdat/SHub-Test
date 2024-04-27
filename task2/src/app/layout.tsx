import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "SHub Classroom | Dạy học thi trực tuyến, LMS, Trắc nghiệm online, Học liệu, Giao bài tập, Thi thử, Ngân hàng câu hỏi",
    description: "Nền tảng học trực tuyến, trắc nghiệm online, giao bài tập về nhà, tổ chức lớp học, tạo bài kiểm tra, đề thi online, kiểm tra online, thi thử online, trắc nghiệm trực tuyến... Nền tảng chuyển đổi số giáo dục uy tín và chất lượng cho giáo viên, nhà trường, trung tâm dạy thêm, trung tâm ngoại ngữ, trung tâm Anh ngữ, trung tâm tiếng Nhật, cơ quan nhà nước.",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
