
import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Coskuner' && password === '506177') {
      onLogin();
    } else {
      setError('Geçersiz kullanıcı adı veya şifre.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-cyan-500/10">
        <div className="text-center">
          <h1 className="text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Köken Sistemi
          </h1>
          <p className="mt-2 text-slate-400">Hayatını Seviye Atlat</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="peer w-full bg-gray-900/50 text-slate-200 border border-slate-700 rounded-lg px-4 py-3 placeholder-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
              placeholder="Kullanıcı Adı"
              required
            />
            <label
              htmlFor="username"
              className="absolute left-4 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-cyan-400 peer-focus:text-sm"
            >
              Kullanıcı Adı
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full bg-gray-900/50 text-slate-200 border border-slate-700 rounded-lg px-4 py-3 placeholder-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
              placeholder="Şifre"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-4 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-fuchsia-400 peer-focus:text-sm"
            >
              Şifre
            </label>
          </div>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 px-4 font-semibold text-lg text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg hover:from-cyan-400 hover:to-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-105"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
