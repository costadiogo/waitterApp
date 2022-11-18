import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';

import { StatusBar } from 'expo-status-bar';

import { Container, OkButton } from './styles';

interface OrderConfirmedModalProps {
    visible: boolean;
    onClick: () => void;
}

export function OrderConfirmedModal({ visible, onClick }: OrderConfirmedModalProps) {
    return (
        <Modal
            visible={visible}
            animationType="fade"
        >

            <StatusBar style="dark" />
            <Container>
                <CheckCircle />

                <Text size={20} weight="600" color="#fff" style={{ marginTop: 12 }}>Pedido Confirmado</Text>
                <Text opacity={0.9} color="#fff" style={{ marginTop: 4 }}>O seu pedido já entrou na fila de produção!</Text>

                <OkButton onPress={onClick}>
                    <Text color="#D73035" weight="600">OK</Text>
                </OkButton>
            </Container>
        </Modal>
    );
}
