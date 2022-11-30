import { Icon, VStack, Text } from 'native-base';
import React from 'react';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Fontisto } from '@expo/vector-icons';

export function Pools() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />


      <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
        <Button
          title="BUSCAR BOLÃO POR CÓDIGO"
          leftIcon={<Icon as={Fontisto} name="search" color="black" size="md" />}
        />
      </VStack>

      <Text color="gray.200" fontSize="sm" textAlign="center" px={10}>
        Você ainda não está participando de {"\n"} nenhum bolão, que tal buscar um por código {"\n"} ou criar um novo?
      </Text>
    </VStack>
  )
}
