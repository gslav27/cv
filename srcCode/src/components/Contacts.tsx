import * as React from 'react';
// styles
import styled from 'styled-components/macro';
// constants
import { CONTACTS } from '../utils/constants';
// components
import Card from './UI/Card';
import Link from './UI/Link';
import List from './UI/List';
import ListItem from './UI/ListItem';
import { ReactComponent as PhoneIcon } from '../icons/call.svg';
import { ReactComponent as EmailIcon } from '../icons/email.svg';
import { ReactComponent as GHIcon } from '../icons/gh.svg';
import { ReactComponent as LinkedinIcon } from '../icons/linkedin.svg';
import { ReactComponent as TelegramIcon } from '../icons/telegram.svg';

const ContactsStyledList = styled(List)`
  ${ListItem} {
    margin-left: 0;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;

    :not(:last-child) {
      margin-bottom: 15px;
    }

    svg {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      min-width: 20px;
      min-height: 20px;
    }

    a {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media print {
      a {
        white-space: unset;
        word-break: break-all;
      }
    }
  }
`;

const Contacts: React.FC = () => (
  <Card palette="secondary" column>
    <ContactsStyledList noListStyle>
      <ListItem>
        <PhoneIcon />
        <Link href={`tel:${CONTACTS.PHONE.val}`}>{CONTACTS.PHONE.label}</Link>
      </ListItem>
      <ListItem>
        <EmailIcon />
        <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link>
      </ListItem>
      <ListItem>
        <GHIcon />
        <Link href={`https://${CONTACTS.GH}`} target="_blank">
          {CONTACTS.GH}
        </Link>
      </ListItem>
      <ListItem>
        <LinkedinIcon />
        <Link href={`https://${CONTACTS.LINKEDIN}`} target="_blank">
          {CONTACTS.LINKEDIN}
        </Link>
      </ListItem>
      <ListItem>
        <TelegramIcon />
        <Link href={`https://${CONTACTS.TELEGRAM}`} target="_blank">
          {CONTACTS.TELEGRAM}
        </Link>
      </ListItem>
    </ContactsStyledList>
  </Card>
);

export default Contacts;
