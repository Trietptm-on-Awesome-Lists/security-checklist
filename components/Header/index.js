// @flow
import * as React from 'react';
import Link from 'next/link';
import { Container, Logo, ButtonRowContainer } from './style';
import { PrimaryButton, GhostButton } from '../Button';

type Props = {
  showHeaderShadow: boolean,
};

export default function Header(props: Props) {
  const { showHeaderShadow } = props;

  return (
    <Container showHeaderShadow={showHeaderShadow} data-cy="header">
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center' }}>
          <Logo>Security Checklist</Logo>
        </a>
      </Link>

      <ButtonRowContainer>
        <Link href="/about">
          <a>
            <GhostButton>About</GhostButton>
          </a>
        </Link>

        <a
          href="https://github.com/brianlovin/security-checklist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton>Contribute</PrimaryButton>
        </a>
      </ButtonRowContainer>
    </Container>
  );
}
