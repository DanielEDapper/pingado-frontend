"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthLayout } from "../components/layout/AuthLayout";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

function MailIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

function LockIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="4" y="11" width="16" height="9" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
    );
}

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                "https://pingado-backend.onrender.com/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Email ou senha inválidos.");
            }

            const data = await response.json();

            localStorage.setItem("token", data.token);

            console.log("Login realizado com sucesso!");

            window.location.href = "/";

        } catch (error) {
            console.error(error);
            setError("Email ou senha inválidos.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthLayout>
            <h1 className="font-titulo up text-4xl leading-tight text-[#34251f] md:text-5xl">
                Bem-vindo de volta.
            </h1>

            <p className="mt-3 font-texto text-sm text-[#34251f]/70">
                Seu café está te esperando.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">

                <Input
                    label="Email"
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon={<MailIcon />}
                />

                <div>
                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        icon={<LockIcon />}
                    />

                    <div className="mt-2 text-right">
                        <Link
                            href="/esqueci-senha"
                            className="font-texto text-xs text-[#34251f]/60 hover:text-[#34251f]"
                        >
                            Esqueceu sua senha?
                        </Link>
                    </div>
                </div>

                {error && (
                    <p className="font-texto text-sm text-red-600">
                        {error}
                    </p>
                )}

                <Button
                    type="submit"
                    variant="solid"
                    fullWidth
                    disabled={loading}
                >
                    {loading ? "Entrando..." : "Login"}
                </Button>

                <div className="flex items-center gap-4">
                    <span className="h-px flex-1 bg-stone-300" />

                    <span className="font-texto text-xs text-[#34251f]/60">
                        ou entre com
                    </span>

                    <span className="h-px flex-1 bg-stone-300" />
                </div>

                <Button variant="outline-neutral" fullWidth>
                    Login com Google
                </Button>

            </form>

            <p className="mt-8 text-center font-texto text-sm text-[#34251f]/70">
                Não tem uma conta?{" "}
                <Link
                    href="/cadastro"
                    className="font-semibold text-[#34251f]"
                >
                    Cadastre-se
                </Link>
            </p>
        </AuthLayout>
    );
}