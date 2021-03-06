import {
  Flex,
  Container,
  Text,
  Heading,
  Image,
  FormControl,
  Input,
  FormLabel,
  Select,
  Link,
  Button,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { countries } from "./Countries";
import { Link as ReactRouterLink, useHistory } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../App";
import { PRICE } from "../landing/home/Services";

export function Purchase() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCVV] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("MY");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const isInvalid =
    cardNumber.trim().length !== 19 ||
    expiration.trim().length !== 5 ||
    cvv.trim().length !== 3 ||
    country === "";

  const history = useHistory();
  return (
    <Layout>
      <Flex
        as="section"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          textAlign="left"
          backgroundColor="white"
          maxWidth="800px"
          fontSize={["2xl", null, "3xl"]}
          padding={[8, null, 16]}
          marginTop={8}
        >
          <Flex alignItems="center">
            <IconButton
              icon={<FaAngleLeft />}
              aria-label="Back"
              onClick={history.goBack}
              variant="ghost"
              size="lg"
              fontSize="3xl"
              marginRight="8"
            />
            <Heading as="h1">Confirm and Pay</Heading>
          </Flex>
          <Text my={[4]} fontWeight={["normal", null, "thin"]}>
            You will get a PDF copy of all your income tax exemptions for RM{" "}
            {PRICE}.
          </Text>
          <Text fontWeight={["normal", null, "thin"]}>
            Purchase now and get your tax paid in a few minutes.
          </Text>
          <Flex flexDirection="column">
            <Flex
              my={[4, null, 8]}
              justifyContent="space-between"
              width="100%"
              alignItems="center"
            >
              <Heading as="h2">Pay with</Heading>
              <Flex>
                <Image
                  width="10"
                  src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                  mr="4"
                />
                <Image
                  width="10"
                  src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg"
                />
              </Flex>
            </Flex>
            <Flex
              width="100%"
              flexDirection="column"
              css={`
                > *:not(:last-child) {
                  margin-bottom: 1.5rem;
                }
              `}
            >
              <FormControl
                position="relative"
                isInvalid={isConfirmed && cardNumber.trim().length !== 19}
                isRequired
              >
                <FormLabel
                  position="absolute"
                  left="3"
                  top="1.5"
                  fontSize="sm"
                  htmlFor="card-number"
                >
                  Card Number
                </FormLabel>
                <Input
                  id="card-number"
                  value={cardNumber}
                  size="lg"
                  padding="3rem 0.75rem 1.5rem 0.75rem"
                  onChange={(e) => {
                    const number = e.currentTarget.value;
                    let replaced = number
                      .toString()
                      .replace(/\d{4}(?=.)/g, "$& ");
                    const replaced2 = replaced.replace(/\s+/g, " ");
                    setCardNumber(replaced2);
                  }}
                  placeholder="0000 0000 0000 0000"
                />
              </FormControl>
              <Flex
                css={`
                  > *:not(:last-child) {
                    margin-right: 1.5rem;
                  }
                `}
              >
                <FormControl
                  position="relative"
                  isInvalid={isConfirmed && expiration.trim().length !== 5}
                  isRequired
                >
                  <FormLabel
                    position="absolute"
                    left="3"
                    top="1.5"
                    fontSize="sm"
                    htmlFor="expiration-date"
                  >
                    Expiration
                  </FormLabel>
                  <Input
                    id="expiration-date"
                    value={expiration}
                    size="lg"
                    // type="number"
                    padding="3rem 0.75rem 1.5rem 0.75rem"
                    onChange={(e) => {
                      const number = e.currentTarget.value;
                      let replaced = number
                        .toString()
                        .replace(/\d{2}(?=.)/g, "$&/");
                      const replaced2 = replaced.replace(/\/+/g, "/");
                      setExpiration(replaced2);
                    }}
                    placeholder="MM / YY"
                  />
                </FormControl>
                <FormControl
                  position="relative"
                  isInvalid={isConfirmed && cvv.trim().length !== 3}
                  isRequired
                >
                  <FormLabel
                    position="absolute"
                    left="3"
                    top="1.5"
                    fontSize="sm"
                    htmlFor="cvv"
                  >
                    CVV
                  </FormLabel>
                  <Input
                    id="cvv"
                    value={cvv}
                    size="lg"
                    type="number"
                    padding="3rem 0.75rem 1.5rem 0.75rem"
                    onChange={(e) => setCVV(e.currentTarget.value)}
                    placeholder="123"
                  />
                </FormControl>
              </Flex>
              <FormControl position="relative">
                <FormLabel
                  position="absolute"
                  left="3"
                  top="1.5"
                  fontSize="sm"
                  htmlFor="zip-code"
                >
                  ZIP Code
                </FormLabel>
                <Input
                  id="zip-code"
                  value={zipCode}
                  size="lg"
                  type="number"
                  padding="3rem 0.75rem 1.5rem 0.75rem"
                  onChange={(e) => setZipCode(e.currentTarget.value)}
                  placeholder="10000"
                />
              </FormControl>
              <FormControl
                position="relative"
                isInvalid={isConfirmed && country === ""}
                border="1px solid rgb(0, 0, 0)"
                borderRadius="md"
                isRequired
              >
                <FormLabel
                  position="absolute"
                  left="3"
                  top="1.5"
                  fontSize="sm"
                  htmlFor="country"
                >
                  Country/region
                </FormLabel>
                <Flex padding="1.5rem 0 0 0">
                  <Select
                    id="country"
                    border="none"
                    size="lg"
                    placeholder="Country"
                    marginLeft="-0.25rem"
                    value={country}
                    _focus={{
                      border: "none",
                    }}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {countries.map((c) => (
                      <option value={c.code} key={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </Select>
                </Flex>
              </FormControl>
              <Text fontSize="xs">
                By selecting the button below, I agree to the{" "}
                <Link textDecoration="underline" as={ReactRouterLink} to="/">
                  Terms and Conditions
                </Link>{" "}
                of MyTax
              </Text>
              <Button
                size="lg"
                backgroundColor="purple.500"
                padding={8}
                color="white"
                borderRadius="none"
                maxWidth="300px"
                onClick={async () => {
                  setIsConfirmed(true);
                  if (isInvalid) {
                    return;
                  }
                  try {
                    await addDoc(collection(db, "purchases"), {
                      cardNumber,
                      expiration,
                      cvv,
                      zipCode,
                      country,
                    });
                    history.push("/error");
                  } catch (error) {
                    console.error(error);
                  }
                }}
              >
                Confirm and pay
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Layout>
  );
}
