import { AuthModalState } from "@/src/atoms/authModalAtom";
//import { auth } from '@/src/firebase/clientApp';
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../firebase/clientApp";
import { FIREBASE_ERROR } from "@/src/firebase/errors";
import { User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

type SingUpProps = {};

const SingUp: React.FC<SingUpProps> = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState);
  const [SingUpForm, setSingUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // Ten const jest destrukturyzacją tablicową. W tym przypadku, wartości zwracane przez hook useCreateUserWithEmailAndPassword() są przypisywane do zmiennych createUserWithEmailAndPassword, user, loading i error w kolejności, w której są zwracane przez hook. Dzięki temu, można odwołać się do każdej wartości za pomocą nazwy zmiennej, np. user lub error, zamiast używać indeksów tablicowych. Skrócona składnia z użyciem kwadratowych nawiasów [ ] pozwala na destrukturyzację bez potrzeby definiowania nazw zmiennych dla każdej wartości, ale tylko dla tych, które są potrzebne.

  const [
    createUserWithEmailAndPassword, //funkcja przekażemy jej email i pass
    userCred,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth); // funkcja asynchroniczna 

  // Funkcja asynchroniczna to funkcja, która działa w sposób nieblokujący i pozwala na wykonywanie innych czynności, podczas gdy oczekuje na zakończenie operacji wejścia/wyjścia lub innej długotrwałej operacji.
  // Kiedy funkcja asynchroniczna zostaje wywołana, nie blokuje ona wykonywania dalszych instrukcji w kodzie, ale zamiast tego kontynuuje działanie w tle. Kiedy funkcja kończy swoją pracę, może zwrócić wynik lub zgłosić błąd. 
  // Do zarządzania funkcjami asynchronicznymi w JavaScript używa się mechanizmu zwanych "Promise" lub "async/await". Mechanizmy te pozwalają na obsługę funkcji asynchronicznych w sposób bardziej czytelny i wygodny niż za pomocą tradycyjnych callbacków.
  // Dzięki asynchronicznemu działaniu funkcji, aplikacja może działać płynniej i nie blokować interakcji użytkownika z nią. Przykładami funkcji asynchronicznych mogą być funkcje pobierające dane z bazy danych lub zapisujące dane na serwerze, które wymagają czasu na wykonanie.
  

  // Firebase logic
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");
    console.log(SingUpForm.password + " / " + SingUpForm.confirmPassword);
    if (SingUpForm.password !== SingUpForm.confirmPassword) {
      //setError -> potrzeba kolejnego stanu
      setError("Passwords do not match");
      return;
    }
    //pass match
    createUserWithEmailAndPassword(SingUpForm.email, SingUpForm.password);
  };
  
  // Walk around dla darmowej bazy danych firebase bez usługi pay as you go
  const createUserDocument = async (user: User) => {
    await addDoc(
      collection(firestore, "users"),
      JSON.parse(JSON.stringify(user))
    );
  };

  useEffect(() => { //useCreateUserWithEmailAndPassword to f asynchroniczna wiec istnieje szansa ze bedzie początkowo niezdefiniowana  
    if (userCred !== undefined){
      createUserDocument(userCred.user);
    }
  }, [userCred]);

  //funkcja onChange jest używana do aktualizacji stanu formularza, który jest przechowywany w hooku useState. Jest ona wywoływana za każdym razem, gdy użytkownik wprowadza zmiany w polu formularza.
  //Dzięki temu, za każdym razem gdy użytkownik wprowadza zmiany w polu formularza, stan formularza jest aktualizowany i przechowuje nowe wartości

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSingUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        mb="2"
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "grey.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />

      <Input
        required
        name="password"
        onChange={onChange}
        placeholder="password"
        type="password"
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "grey.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />

      <Input
        required
        name="confirmPassword"
        onChange={onChange}
        placeholder="confirm password"
        type="password"
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "grey.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />

      <Text
        textAlign={"center"}
        color="red"
        marginBottom={"5px"}
        fontSize="0.8em"
      >
        {error ||
          FIREBASE_ERROR[userError?.message as keyof typeof FIREBASE_ERROR]}
      </Text>

      <Button
        type="submit"
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        isLoading={loading}
      >
        Sing Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already redditor?</Text>
        <Text
          color="blue.500"
          fontWeight="700"
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SingUp;
