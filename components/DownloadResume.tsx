import React, { useState } from "react";
import path from "path";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
const DownloadResume = ({
  title,
  icons,
}: {
  title: string;
  icons: React.ReactNode;
}) => {
  const success = (msg: string) => toast.success(msg);
  const error = (msg: string) => toast.error(msg);
  const [isOpen, setIsOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const Download = () => {
    const fileName = `IjaasAhamad_${companyName}.pdf`;
    // Update the path to your resume
    const resumePath = "./IjaasAhamad_.pdf";

    const link = document.createElement("a");
    link.href = resumePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownload = async () => {
    const Fet = await fetch("http://localhost:3000/api/visited", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        visiter: companyName,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res: any) => {
        if (res.message) {
          success(`Thank you for recruiting team of ${res.message}`);
          Download();
        } else {
          error(res.error);
        }
        console.log("Success");
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDownload();
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="relative inline-flex h-12 ml-[20px] w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
        >
          {title}
          {icons}
        </span>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen} modal>
        <DialogTrigger asChild>
          <button className="hidden" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Company Name</DialogTitle>
            <DialogDescription>
              Please enter the company name to download your resume with the
              formatted filename.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <DialogFooter className="m-[20px] ">
              <Button type="submit">Download Resume</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DownloadResume;
