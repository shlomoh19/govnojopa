// MP4 MOCK
import IvanVideo from '../../../files/videos/Vanya_programmer.mp4'
import DanielProgVideo from '../../../files/videos/Daniel_programmer.mp4'
import SalmanVideo from '../../../files/videos/Salman_voin.mp4'
import ShkolnicaVideo from '../../../files/videos/Harek_T34_85_film.mp4'
import IgorVideo from '../../../files/videos/Igor_pacan.mp4'
import MarinaVideo from '../../../files/videos/Marina_design.mp4'
import KristinaVideo from '../../../files/videos/Kristina_pr.mp4'
import OlgaVideo from '../../../files/videos/Olya_pr.mp4'
import DanilArtVideo from '../../../files/videos/Danil_art.MP4'
import SamirVideo from '../../../files/videos/Samir_prog.mp4'

// WEBP
const IvanWebp = 'https://lbefree.com/storage/casting/team/images/Vanya_programmer.webp'
const EvgenyWebp = 'https://lbefree.com/storage/casting/team/images/Jenya_programmer.webp'
const SalmanWebp = 'https://lbefree.com/storage/casting/team/images/Salman_voin.webp'
const ShkolnicaWebp = 'https://lbefree.com/storage/casting/team/images/Harek_T34_85_film.webp'
const IgorWebp = 'https://lbefree.com/storage/casting/team/images/Igor_pacan.webp'
const MarinaWebp = 'https://lbefree.com/storage/casting/team/images/Marina_design.webp'
const KristinaWebp = 'https://lbefree.com/storage/casting/team/images/Kristina_pr.webp'
const OlgaWebp = 'https://lbefree.com/storage/casting/team/images/Olya_pr.webp'
const DanielProgWebp = 'https://lbefree.com/storage/casting/team/images/Danil_programmer.webp'
const LizaWebp = 'https://lbefree.com/storage/casting/team/images/Lisa_design.webp'
const DanilArtWebp = 'https://lbefree.com/storage/casting/team/images/Danil_art.webp'
const SamirWebp = 'https://lbefree.com/storage/casting/team/images/Samir_prog.webp'

// JPG
const EvgenyImg = 'https://lbefree.com/storage/casting/team/images/Jenya_programmer.jpg'
const LizaImg = 'https://lbefree.com/storage/casting/team/images/Lisa_design.jpg'
const IvanImg = 'https://lbefree.com/storage/casting/team/images/Vanya_programmer.jpg'
const SalmanImg = 'https://lbefree.com/storage/casting/team/images/Salman_voin.jpg'
const ShkolnicaImg = 'https://lbefree.com/storage/casting/team/images/Harek_T34_85_film.jpg'
const IgorImg = 'https://lbefree.com/storage/casting/team/images/Igor_pacan.jpg'
const MarinaImg = 'https://lbefree.com/storage/casting/team/images/Marina_design.jpg'
const KristinaImg = 'https://lbefree.com/storage/casting/team/images/Kristina_pr.jpg'
const OlgaImg = 'https://lbefree.com/storage/casting/team/images/Olya_pr.jpg'
const DanielProgImg = 'https://lbefree.com/storage/casting/team/images/Danil_programmer.jpg'
const DanilArtImg = 'https://lbefree.com/storage/casting/team/images/Danil_art.jpg'
const SamirImg = 'https://lbefree.com/storage/casting/team/images/Samir_prog.jpg'

// MP4
// const IvanVideo = 'https://lbefree.com/storage/casting/team/Vanya_programmer.mp4'
// const DanielProgVideo = 'https://lbefree.com/storage/casting/team/Daniel_programmer.mp4'
// const SalmanVideo = 'https://lbefree.com/storage/casting/team/Salman_voin.mp4'
// const ShkolnicaVideo = 'https://lbefree.com/storage/casting/team/Harek_T34_85_film.mp4'
// const IgorVideo = 'https://lbefree.com/storage/casting/team/Igor_pacan.mp4'
// const MarinaVideo = 'https://lbefree.com/storage/casting/team/Marina_design.mp4'
// const KristinaVideo = 'https://lbefree.com/storage/casting/team/Kristina_pr.mp4'
// const OlgaVideo = 'https://lbefree.com/storage/casting/team/Olya_pr.mp4'
// const DanilArtVideo = 'https://lbefree.com/storage/casting/team/Danil_art.mp4'
// const SamirVideo = 'https://lbefree.com/storage/casting/team/Samir_prog.mp4'


const People = [
  { id: 6, position: 'PARTNERSHIP MANAGER', FIO: 'SALMAN AHACHAD', webp: SalmanWebp, photo: SalmanImg, video: SalmanVideo },
  { id: 4, position: 'PROGRAMMER', FIO: 'EUGENE SLUGIN', webp: EvgenyWebp, photo: EvgenyImg, video: false },
  { id: 1, position: 'PROGRAMMER', FIO: 'IVAN KHANIN', webp: IvanWebp, photo: IvanImg, video: IvanVideo },
  { id: 10, position: 'PROGRAMMER', FIO: 'DANIEL RASSOMAKHIN', webp: DanielProgWebp, photo: DanielProgImg, video: DanielProgVideo },
  { id: 15, position: 'PROGRAMMER & MEDIA MANAGER', FIO: 'SAMIR El MOUSAOUI', webp: SamirWebp, photo: SamirImg, video: SamirVideo },
  { id: 12, position: 'PR MANAGER', FIO: 'KRISTINA SOSIPATROVA', webp: KristinaWebp, photo: KristinaImg, video: KristinaVideo },
  { id: 11, position: 'PR MANAGER', FIO: 'OLGA KORNEEVA', webp: OlgaWebp, photo: OlgaImg, video: OlgaVideo },
  { id: 7, position: 'FILM DIRECTOR', FIO: 'OLGA ZVEZDOGLIAD', webp: ShkolnicaWebp, photo: ShkolnicaImg, video: ShkolnicaVideo },
  { id: 9, position: 'WEB DESIGNER', FIO: 'MARINA BIBIK', webp: MarinaWebp, photo: MarinaImg, video: MarinaVideo },
  { id: 2, position: 'WEB DESIGNER', FIO: 'ELIZAVETA ZINENKO', webp: LizaWebp, photo: LizaImg, video: false },
  { id: 3, position: 'ART DESIGNER', FIO: 'DANILA MALYUTIN', webp: DanilArtWebp, photo: DanilArtImg, video: DanilArtVideo },
  { id: 8, position: 'ACCOUNT MANAGER', FIO: 'IGOR LYAKHOV', webp: IgorWebp, photo: IgorImg, video: IgorVideo },
]

export default People