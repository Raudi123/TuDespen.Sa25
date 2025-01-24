function PaymentForm({ total, items, onPaymentMethodChange }) {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            phone: '',
            address: '',
            paymentMethod: 'zelle',
            zelleInfo: '',
            zellePayer: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
            if (name === 'paymentMethod') {
                onPaymentMethodChange(value);
            }
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const selectedMethod = paymentMethods[formData.paymentMethod];
            const convertedTotal = total * selectedMethod.rate;
            
            let message = `🛒 Nuevo Pedido\n\n\n`;
            
            message += `👤 Datos del Cliente:\n\n`;
            message += `• Nombre: ${formData.name}\n\n`;
            message += `• Teléfono: ${formData.phone}\n\n`;
            message += `• Dirección: ${formData.address}\n\n`;
            message += `• Método de Pago: ${selectedMethod.name}\n\n\n`;
            
            message += `💳 Información de Pago:\n\n`;
            message += `Monto en USD: $${total.toFixed(2)}\n\n`;
            
            if (selectedMethod.rate !== 1) {
                message += `Tasa de cambio: ${selectedMethod.rate} ${selectedMethod.currency}\n\n`;
            }
            
            message += `Total a pagar: ${convertedTotal.toFixed(2)} ${selectedMethod.currency}\n\n`;
            
            if (formData.paymentMethod === 'zelle') {
                message += `Email/Teléfono de Zelle: ${formData.zelleInfo}\n`;
                message += `Nombre del Pagador: ${formData.zellePayer}\n\n`;
            } else if (formData.paymentMethod !== 'cash') {
                message += `Por favor realice la transferencia y envíe el comprobante por este medio.\n\n`;
            }
            
            message += `\n🛍 Productos:\n\n`;
            items.forEach(item => {
                message += `• ${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}\n\n`;
            });
            
            message += `\n💰 Total a Pagar: ${convertedTotal.toFixed(2)} ${selectedMethod.currency}`;
            message += ` de 24 a 48 horas pedido completado`;
            
            const whatsappUrl = `https://wa.me/5353933247?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        };

        return (
            <form data-name="payment-form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Nombre Completo</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1">Teléfono</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1">Dirección</label>
                    <textarea
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1">Método de Pago</label>
                    <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        {Object.entries(paymentMethods).map(([key, method]) => (
                            <option key={key} value={key}>{method.name}</option>
                        ))}
                    </select>
                </div>
                {formData.paymentMethod === 'zelle' && (
                    <div>
                        <div>
                            <label className="block mb-1">Email o Teléfono de Zelle</label>
                            <input
                                type="text"
                                name="zelleInfo"
                                required
                                value={formData.zelleInfo}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Nombre del Pagador</label>
                            <input
                                type="text"
                                name="zellePayer"
                                required
                                value={formData.zellePayer}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600"
                >
                    Proceder a realizar pago
                </button>
            </form>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
