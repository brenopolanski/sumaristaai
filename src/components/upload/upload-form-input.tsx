'use client';

import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { MotionDiv } from '../common/motion-wrapper';
import { itemVariants } from '@/utils/constants';

interface UploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
}

export const UploadFormInput = forwardRef<HTMLFormElement, UploadFormInputProps>(({ onSubmit, isLoading }, ref) => {
    return (
        <form ref={ref} className="flex flex-col gap-6" onSubmit={onSubmit}>
            <MotionDiv
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex justify-end items-center gap-1.5">
                <Input id="file"
                    type="file"
                    name="file"
                    accept='application/pdf'
                    required
                    disabled={isLoading}
                    className={cn(
                        "cursor-pointer",
                        isLoading && "cursor-not-allowed opacity-50"
                    )} />
                <Button disabled={isLoading}>
                    {isLoading ?
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Carregando...
                        </>
                        : "Envie seu PDF"}
                </Button>
            </MotionDiv>
        </form>
    );
});

UploadFormInput.displayName = "UploadFormInput";

export default UploadFormInput;