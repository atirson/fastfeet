import * as Yup from 'yup';
import Courier from '../models/Courier';
import File from '../models/File';

class CourierController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const couriers = await Courier.findAll({
      attributes: ['id', 'name', 'email'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(couriers);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const courierExists = await Courier.findOne({
      where: { email: req.body.email },
    });

    if (courierExists) {
      return res.status(401).json({ error: 'Courier already exists.' });
    }

    const courier = await Courier.create(req.body);

    return res.json(courier);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const courier = await Courier.findByPk(req.params.id);

    if (!courier) {
      return res.status(401).json({ error: 'Courier does not exists.' });
    }

    await courier.update(req.body);

    const { id, name, email, avatar } = await Courier.findByPk(courier.id, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({ id, name, email, avatar });
  }

  async delete(req, res) {
    const courier = await Courier.findByPk(req.params.id);

    if (!courier) {
      return res.status(401).json({ error: 'Courier does not exists.' });
    }

    await courier.destroy();

    return res.json({ courier: 'Delete with success.' });
  }
}

export default new CourierController();
