import React from 'react';

const Auth = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-nutri-offwhite dark:bg-background-dark font-display group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="flex w-full flex-col items-center justify-center p-4 pt-12">
        <img alt="Logotipo do Nutri-Par, uma folha estilizada dentro de um círculo" className="h-16 w-16 mb-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzMT8hJvXnFuZzQQub4tKaJzn6nAckGXKMq7gaPi3auloaPQ7awvqizBP-7fVNsEDRbWAeqjqRoyG_yjjU8uDjT2IxfuWJ01N-Pf1w3eQ_ikoHmYQ4KFnWcpXl0Vdy4sytnAqQBVR6tw4vwQ1rDb5CKYNfIvxMNzSnX65tFi21sJvvdr6J6MUJnezH-PVuKa3hoyIYA15FtEKL3R9FzM-YOYqWRaKu1u0YLgm8AqqyUwXPXKnuguZz2rojvGnItC2fppfhjTMjsQ" />
      </div>
      <div className="px-4">
        <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-nutri-gray/50 dark:bg-background-dark p-1">
          <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-nutri-brown/20 has-[:checked]:shadow-sm has-[:checked]:text-nutri-brown text-nutri-brown/70 text-base font-semibold leading-normal transition-all duration-300">
            <span className="truncate">Entrar</span>
            <input defaultChecked className="invisible w-0" name="auth-toggle" type="radio" value="Entrar" />
          </label>
          <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-nutri-brown/20 has-[:checked]:shadow-sm has-[:checked]:text-nutri-brown text-nutri-brown/70 text-base font-semibold leading-normal transition-all duration-300">
            <span className="truncate">Cadastrar</span>
            <input className="invisible w-0" name="auth-toggle" type="radio" value="Cadastrar" />
          </label>
        </div>
      </div>
      <div className="flex flex-col px-4 pt-8">
        <h1 className="text-nutri-brown dark:text-nutri-offwhite tracking-tight text-[28px] font-bold leading-tight text-left pb-1">Bem-vindo(a) de volta!</h1>
        <p className="text-nutri-brown/70 dark:text-nutri-offwhite/70 text-base font-normal pb-6">Faça login para continuar sua jornada saudável.</p>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col w-full">
            <p className="text-nutri-brown dark:text-nutri-offwhite text-sm font-medium leading-normal pb-2">Email ou Nome de Usuário</p>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-nutri-brown dark:text-nutri-offwhite focus:outline-none focus:ring-2 focus:ring-nutri-green border border-nutri-gray dark:border-nutri-brown/50 bg-white dark:bg-background-dark focus:border-nutri-green h-14 placeholder:text-nutri-brown/40 dark:placeholder:text-nutri-offwhite/40 p-4 text-base font-normal leading-normal" placeholder="Digite seu email ou nome de usuário" value="" />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-nutri-brown dark:text-nutri-offwhite text-sm font-medium leading-normal pb-2">Senha</p>
            <div className="relative flex w-full flex-1 items-stretch">
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-nutri-brown dark:text-nutri-offwhite focus:outline-none focus:ring-2 focus:ring-nutri-green border border-nutri-gray dark:border-nutri-brown/50 bg-white dark:bg-background-dark focus:border-nutri-green h-14 placeholder:text-nutri-brown/40 dark:placeholder:text-nutri-offwhite/40 p-4 pr-12 text-base font-normal leading-normal" placeholder="Digite sua senha" type="password" value="" />
              <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-nutri-brown/50 dark:text-nutri-offwhite/50 hover:text-nutri-brown dark:hover:text-nutri-offwhite">
                <span className="material-symbols-outlined" data-icon="Eye">visibility</span>
              </button>
            </div>
          </label>
          <a className="text-right text-sm font-medium text-nutri-green hover:underline" href="#">Esqueci minha senha</a>
        </div>
      </div>
      <div className="flex flex-col px-4 pt-6 pb-6 gap-4">
        <button className="flex h-14 w-full items-center justify-center rounded-xl bg-nutri-green text-white text-base font-bold shadow-sm hover:bg-opacity-90 transition-colors">Entrar</button>
        <div className="flex items-center gap-4">
          <hr className="w-full border-t border-nutri-gray dark:border-nutri-brown/50" />
          <p className="text-sm text-nutri-brown/70 dark:text-nutri-offwhite/70 whitespace-nowrap">ou continue com</p>
          <hr className="w-full border-t border-nutri-gray dark:border-nutri-brown/50" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="flex h-14 w-14 items-center justify-center rounded-full border border-nutri-gray dark:border-nutri-brown/50 bg-white dark:bg-background-dark hover:bg-nutri-gray/20 transition-colors">
            <img alt="Google logo" className="h-6 w-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN42DbCMztnzsnGhKV8etnsHSPe6zTsQymJHOW6wAKhrYhZF8ixkHiUB0fkCdle46zZjK-oaaFtaSAruGgsUT1x9f5tXKwPfuVM4q3ZYOlfDKJqJDFTaeX92KmURjnqRwxlnAjq-RO4mvZR_qQf6Bt8yRfR4JyZezHQ6mI5is6o00K24-lESU64OMbcKJWQBwB4sYbCsVkwrjTHSr_Xdo_6Jl3VoJwxy9QAkGWpZS2S9ISXIH18ExiZy4QSrDUFCnzN0D4mJdsIA" />
          </button>
          <button className="flex h-14 w-14 items-center justify-center rounded-full border border-nutri-gray dark:border-nutri-brown/50 bg-white dark:bg-background-dark hover:bg-nutri-gray/20 transition-colors">
            <img alt="Apple logo" className="h-6 w-6 dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDrkTZa42SGxfm5pF140fFwmHwgZgcjjncD2zQC-BcKyHfwA4Ka2kI-w6YptBzTSrV49hYlOnjQX_6f43D0U5lWHwk6Pqvdzgpn_pAAe0oGXAll1mjFXOUVnhePXIc1xcLnDAphDgr-URAJRPBmLpKQxvoavZDikHK3prqm49qoVdfvO1IcrjKI558mSL9caf3p04uXkClD4uEEifxAxCEB78fMd8icW1L8DH_ND_RvMtvZVBxOPiBvOTinwYPhXySWzMx4IfR9g" />
          </button>
        </div>
      </div>
      <div className="px-4 pb-8 text-center">
        <p className="text-xs text-nutri-brown/60 dark:text-nutri-offwhite/60">Ao continuar, você concorda com nossos <a className="font-medium underline" href="#">Termos de Serviço</a> e <a className="font-medium underline" href="#">Política de Privacidade</a>.</p>
      </div>
    </div>
  );
};

export default Auth;