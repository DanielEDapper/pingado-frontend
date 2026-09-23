export function Loading() {
    return (
        <div className="flex flex-col items-center justify-center gap-3 p-10">
            <span
                className="
                    h-8
                    w-8
                    animate-spin
                    rounded-full
                    border-4
                    border-stone-200
                    border-t-amber-700
                "
            />

            <p className="text-sm text-black/60">
                Carregando...
            </p>
        </div>
    );
}