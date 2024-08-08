import { useEffect } from 'react';
import Swal from 'sweetalert2';

// this is legacy code for a popup used in the AddVideo page
export default function ErrorSuccessPopup({ text, title, icon, handleClose }) {
	useEffect(() => {
		Swal.fire({
			width: '30rem',
			text,
			title,
			icon,
			showCloseButton: true, // Keep this for the close button (X)
		}).then((result) => {
			if (result.isConfirmed || result.dismiss === Swal.DismissReason.close) {
				handleClose();
			}
		});
	}, [text, title, icon]);

	return null; // Assuming this component does not render anything itself
}
