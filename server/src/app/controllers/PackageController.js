import * as Yup from 'yup';
import { getHours, subHours } from 'date-fns';
import Package from '../models/Package';

class PackageController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number()
        .integer()
        .required(),
      deliveryman_id: Yup.number()
        .integer()
        .required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails.' });
    }
    const date = getHours(subHours(new Date(), 3));

    if (!(date >= 8 && date < 18)) {
      return res.status(401).json({ error: 'Error' });
    }
    const { recipient_id, deliveryman_id, product } = req.body;

    const packager = await Package.create({
      recipient_id,
      deliveryman_id,
      product,
      start_date: new Date(),
    });

    return res.json(packager);
  }
}

export default new PackageController();
