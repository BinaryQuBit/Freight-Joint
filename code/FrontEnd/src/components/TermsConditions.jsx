import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  UnorderedList,
  ListItem,
  Text,
  Image,
  Flex
} from '@chakra-ui/react';

import Logo from '../../public/img/logo.svg';

export default function Terms({ isTermsOpen, onCloseTerms }) {
  return (
    <Modal isOpen={isTermsOpen} onClose={onCloseTerms}>
      <ModalOverlay />
      <ModalContent>
        <Flex justifyContent="center">
          <Image src={Logo} w="200px" padding="5px"/>
        </Flex>
        <ModalHeader textAlign="center">Terms of Service</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <UnorderedList spacing={3}>
            <Text fontWeight = "bold" textAlign="center">Registration and Account Maintenance</Text>
            <ListItem>Shippers must provide accurate, complete, and updated registration information.</ListItem>
            <ListItem>Responsible for safeguarding login credentials.</ListItem>
            <ListItem>Account activity is the shipper's responsibility.</ListItem>

            <Text fontWeight="bold" textAlign="center">Usage of Service</Text>
            <ListItem>Only legitimate, clear, and accurate load details allowed.</ListItem>
            <ListItem>Misleading, fraudulent, or illegal postings are prohibited.</ListItem>
            <ListItem>Possible account suspension for rule violations.</ListItem>

            <Text fontWeight="bold" textAlign="center">Payment Policies</Text>
            <ListItem>Agreement to subscription fees, posting fees, and other charges.</ListItem>
            <ListItem>Payments are non-refundable unless specified.</ListItem>

            <Text fontWeight="bold" textAlign="center">Role of Freight Joint</Text>
            <ListItem>Acts as a neutral facilitator between shippers and carriers.</ListItem>
            <ListItem>Encourages shippers to independently vet carriers.</ListItem>

            <Text fontWeight="bold" textAlign="center">Protection of Intellectual Property</Text>
            <ListItem>Content owned by Freight Joint, requiring permission for distribution or copying.</ListItem>

            <Text fontWeight="bold" textAlign="center">Privacy and Data Protection</Text>
            <ListItem>Adherence to the platform’s privacy policy.</ListItem>
            <ListItem>Prohibition against misuse of personal data.</ListItem>

            <Text fontWeight="bold" textAlign="center">Cancellation and No-shows</Text>
            <ListItem>Penalties for insufficient notice on load cancellations.</ListItem>
            <ListItem>Account suspension for repeated failures to honor posted loads.</ListItem>

            <Text fontWeight="bold" textAlign="center">Dispute Handling</Text>
            <ListItem>Encouragement for amicable dispute resolution.</ListItem>
            <ListItem>Mediation services available but not mandatory.</ListItem>

            <Text fontWeight="bold" textAlign="center">Limitations on Liability</Text>
            <ListItem>Freight Joint not responsible for transaction-related losses or damages.</ListItem>

            <Text fontWeight="bold" textAlign="center">Links and Third-party Integrations</Text>
            <ListItem>External services and links used at the shipper’s risk.</ListItem>

            <Text fontWeight="bold" textAlign="center">Service Availability</Text>
            <ListItem>Occasional downtimes for maintenance or technical issues.</ListItem>

            <Text fontWeight="bold" textAlign="center">Feedback and Ratings</Text>
            <ListItem>Shipper reviews of carriers must be factual and non-defamatory.</ListItem>

            <Text fontWeight="bold" textAlign="center">Termination Rights</Text>
            <ListItem>Freight Joint can suspend or terminate accounts for terms breach.</ListItem>

            <Text fontWeight="bold" textAlign="center">Modifications to Service</Text>
            <ListItem>Possible updates to features, offerings, or terms.</ListItem>

            <Text fontWeight="bold" textAlign="center">Jurisdiction</Text>
            <ListItem>Disputes governed by Transport Canada’s Motor Carrier Division laws.</ListItem>

            <Text fontWeight="bold" textAlign="center">Indemnity</Text>
            <ListItem>Shippers indemnify Freight Joint against liabilities from platform misuse.</ListItem>

            <Text fontWeight="bold" textAlign="center">Entire Agreement</Text>
            <ListItem>Terms and referenced policies represent the full agreement.</ListItem>

            <Text fontWeight="bold" textAlign="center">Contact</Text>
            <ListItem>Queries and concerns directed to freightjoint@ense374.com / 123-456-7890.</ListItem>
          </UnorderedList>
        </ModalBody>
        <ModalFooter>
          <Button bg="#0866FF" color="white" _hover={{ bg: "#42B72A" }} mr={3} onClick={onCloseTerms}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};