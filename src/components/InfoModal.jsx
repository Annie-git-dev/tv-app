import Modal from './ui/Modal';
import useModalStore from '../store/useModalStore';
import { formatSecondsToHrsMins } from '../utils/utils';

export default function InfoModal() {
    const { infoVideo, closeModals } = useModalStore();

    return (
        <Modal isOpen={!!infoVideo} onClose={closeModals}>
            {infoVideo && (
                <div className="text-white space-y-4">
                    <h2 className="text-2xl font-bold">{infoVideo.Title}</h2>
                    <p>Category: {infoVideo.Category}</p>
                    <p>Description: {infoVideo.Description}</p>
                    <p className="text-sm text-gray-400">
                        Year: {infoVideo.ReleaseYear}<br />
                        Rating: {infoVideo.MpaRating}<br />
                        Duration: {formatSecondsToHrsMins(infoVideo.Duration)}
                    </p>
                </div>
            )}
        </Modal>
    );
}
