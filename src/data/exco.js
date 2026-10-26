import President from '@/assets/excos/Joshua.jpeg'
import InternalVP from '@/assets/excos/Abigail.jpeg'
import ExternalVP from '@/assets/excos/Ken.jpeg'
import Secretary from '@/assets/excos/Gabby.jpeg'
import Finance from '@/assets/excos/Ryan.jpeg'
import DNM1 from '@/assets/excos/Shenia.jpeg'
import DNM2 from '@/assets/excos/Autea.jpeg'
import ENL1 from '@/assets/excos/Stella.jpeg'
import ENL2 from '@/assets/excos/Daniel.jpeg'
import IT from '@/assets/excos/Brian.jpeg'

const member = (name, role, image, instagram = '', linkedin = '') => ({
  name,
  role,
  image,
  instagram,
  linkedin,
})

// Ordered for the Exco rows: the President is first so they appear top-left
// on multi-column layouts and top-centre on mobile.
export const exco = [
  member('Joshua', 'President', President, 'https://www.instagram.com/joshualoopz/'),
  member('Ken', 'External VP', ExternalVP),
  member(
    'Abigail',
    'Internal VP',
    InternalVP,
    'https://www.instagram.com/avrx_0405/',
    'https://www.linkedin.com/in/abigail-vun-83027233a',
  ),
  member('Stella', 'Events and Logistics', ENL1),
  member('Daniel', 'Events and Logistics', ENL2),
  member('Gabby', 'Secretary', Secretary),
  member('Brian', 'IT', IT),
  member('Ryan', 'Treasurer', Finance),
  member('Autea', 'Design and Media', DNM2),
  member('Shenia', 'Design and Media', DNM1),
]
