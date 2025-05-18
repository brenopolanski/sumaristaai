'use client';

import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { useState, useTransition } from 'react';
import { cn } from '@/lib/utils';
import { deleteSummaryAction } from '@/actions/summary-actions';
import { toast } from 'sonner';

interface DeleteButtonProps {
    summaryId: string;
}

export default function DeleteButton({ summaryId }: DeleteButtonProps) {
    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleDelete = async () => {
        startTransition(async () => {
            const result = await deleteSummaryAction({ summaryId });
            if (result.success) {
                setOpen(false);
                toast.success("Sumário deletado com sucesso");
            } else {
                toast.error("Erro ao deletar sumário");
            }
        });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    cy-data="delete-button"
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 bg-gray-50 border border-gray-200 hover:text-blue-600 hover:bg-blue-50"
                >
                    <Trash2 className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Deletar Sumário</DialogTitle>
                    <DialogDescription>
                        Você tem certeza que deseja deletar este sumário? Esta ação não pode ser revertida.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" className='bg-gray-500 hover:bg-gray-600 text-white' onClick={() => setOpen(false)}>Cancelar</Button>
                    <Button variant="destructive" className={cn('bg-blue-500 hover:bg-blue-600', isPending && 'opacity-50 cursor-not-allowed')} onClick={handleDelete}>{isPending ? "Deletando..." : 'Deletar'}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}