module.exports = function CadastrarUsuarioUseCase() {
  return async function ({ nomeCompleto, DPF, telefone, endereco, email }) {
    await usuariosRepository.cadastrar({
      nomeCompleto,
      DPF,
      telefone,
      endereco,
      email
    });
  };
};
