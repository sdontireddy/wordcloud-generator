import React, { useRef } from 'react';
import { Box, Button, Card, Container, Text } from 'theme-ui';

import {
	useClickOutside,
	useDisableDocumentScroll,
	useEscape,
} from '../../hooks';

export default function Modal({
	children,
	shown,
	submitText,
	title,
	onHide,
	onSubmit,
}) {
	const modalRef = useRef();

	function handleHide() {
		if (shown) {
			onHide();
		}
	}

	useClickOutside(modalRef, handleHide);
	useDisableDocumentScroll(shown);
	useEscape(handleHide);

	if (!shown) {
		return null;
	}

	return (
		<Box
			bg="backdrop"
			sx={{ bottom: 0, left: 0, position: 'fixed', right: 0, top: 0 }}>
			<Container
				ref={modalRef}
				sx={{
					height: 'calc(80vh)',
					overflow: 'hidden',
					transform: 'translateY(10vh)',
				}}>
				<Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
					<Box pb={3}>
						<Text as="h2">{title}</Text>
					</Box>
					<Box sx={{ flex: '1 1 auto', margin: '0 auto', overflow: 'auto' }}>
						{children}
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'flex-end' }} pt={3}>
						<Button variant="secondary" onClick={onHide}>
							Cancel
						</Button>
						<Button ml={3} onClick={onSubmit}>
							{submitText}
						</Button>
					</Box>
				</Card>
			</Container>
		</Box>
	);
}