import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const validate = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    } else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.telefone)) {
      newErrors.telefone = 'Telefone inválido. Use o formato (00) 00000-0000';
    }
    
    if (!formData.assunto.trim()) {
      newErrors.assunto = 'Assunto é obrigatório';
    }
    
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória';
    }
    
    return newErrors;
  };

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, telefone: formatted });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      try {
        setSubmitStatus('sending');
        
        // Aqui você implementará a lógica de envio do email
        // Por enquanto, vamos simular um envio bem-sucedido
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSubmitStatus('success');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        });
        
        setTimeout(() => setSubmitStatus(''), 5000);
      } catch (error) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 5000);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-dark-custom text-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-marigold mb-12 text-center">
          Entre em Contato
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-black/30 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-flax mb-2" htmlFor="nome">Nome *</label>
                <input
                  type="text"
                  id="nome"
                  className="w-full p-3 rounded bg-dark-custom border border-marigold text-white"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
                {errors.nome && <p className="text-red-500 mt-1">{errors.nome}</p>}
              </div>

              <div>
                <label className="block text-flax mb-2" htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded bg-dark-custom border border-marigold text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-flax mb-2" htmlFor="telefone">Telefone *</label>
                <input
                  type="tel"
                  id="telefone"
                  className="w-full p-3 rounded bg-dark-custom border border-marigold text-white"
                  value={formData.telefone}
                  onChange={handlePhoneChange}
                  placeholder="(00) 00000-0000"
                />
                {errors.telefone && <p className="text-red-500 mt-1">{errors.telefone}</p>}
              </div>

              <div>
                <label className="block text-flax mb-2" htmlFor="assunto">Assunto *</label>
                <input
                  type="text"
                  id="assunto"
                  className="w-full p-3 rounded bg-dark-custom border border-marigold text-white"
                  value={formData.assunto}
                  onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                />
                {errors.assunto && <p className="text-red-500 mt-1">{errors.assunto}</p>}
              </div>

              <div>
                <label className="block text-flax mb-2" htmlFor="mensagem">Mensagem *</label>
                <textarea
                  id="mensagem"
                  className="w-full p-3 rounded bg-dark-custom border border-marigold text-white h-32"
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                />
                {errors.mensagem && <p className="text-red-500 mt-1">{errors.mensagem}</p>}
              </div>

              <button
                type="submit"
                className={`w-full p-3 rounded font-semibold transition-colors ${
                  submitStatus === 'sending'
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-marigold hover:bg-old-gold'
                }`}
                disabled={submitStatus === 'sending'}
              >
                {submitStatus === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center mt-4">
                  Mensagem enviada com sucesso!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center mt-4">
                  Erro ao enviar mensagem. Por favor, tente novamente.
                </p>
              )}
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-black/30 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-marigold mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-4">
                <p className="flex items-center text-flax">
                  <MapPin className="mr-4" size={24} />
                  Rua Tupinambás, 13 - SALA 1401 - Edifício Absoluto Melo
                  CEP: 39401-509 - Montes Claros - MG
                </p>
                <p className="flex items-center text-flax">
                  <Phone className="mr-4" size={24} />
                  (38) 98827-7658
                </p>
                <p className="flex items-center text-flax">
                  <Mail className="mr-4" size={24} />
                  leanderadv@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-black/30 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-marigold mb-6">
                Horário de Atendimento
              </h2>
              <div className="space-y-2 text-flax">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Atendimentos em horários especiais podem ser agendados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;