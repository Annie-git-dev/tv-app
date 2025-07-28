import Modal from './ui/Modal';
import useModalStore from '../store/useModalStore';

export default function PlayerModal() {
    const { playerVideo, closeModals } = useModalStore();

    return (
        <Modal isOpen={!!playerVideo} onClose={closeModals}>
            {playerVideo && (
                <video
                    src={playerVideo.VideoUrl}
                    controls
                    autoPlay
                    className="w-full h-[60vh] object-cover rounded-lg"
                />
            )}
        </Modal>
    );
}
