import * as images from '@/assets/images.js'

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
  member('Joshua', 'President', images.joshua, 'https://www.instagram.com/joshualoopz/'),
  member('Ken', 'External VP', images.ken),
  member(
    'Abigail',
    'Internal VP',
    images.abigail,
    'https://www.instagram.com/avrx_0405/',
    'https://www.linkedin.com/in/abigail-vun-83027233a',
  ),
  member('Stella', 'Events and Logistics', images.stella),
  member('Daniel', 'Events and Logistics', images.daniel),
  member('Gabby', 'Secretary', images.gabby),
  member('Brian', 'IT', images.brian),
  member('Ryan', 'Treasurer', images.ryan),
  member('Autea', 'Design and Media', images.autea),
  member('Shenia', 'Design and Media', images.shenia),
]
