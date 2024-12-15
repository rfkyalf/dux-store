import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function DialogModal({
  trigger,
  title,
  content,
}: {
  trigger: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="w-[90%] md:w-[700px] lg:w-[960px] xl:w-[1120px] rounded-xl px-4 pt-2 pb-4">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="max-h-[400px] overflow-auto">{content}</div>
      </DialogContent>
    </Dialog>
  );
}
