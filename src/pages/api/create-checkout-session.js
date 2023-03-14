const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    // description: item.description,
    quantity: 1,
    price_data: {
      currency: 'USD',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  console.log(transformedItems, 'testing');

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_options: [
      {
        shipping_rate: 'shr_1MigEyA5OmylbvaaWDGOKWIc',
      },
    ],
    shipping_address_collection: {
      allowed_countries: ['GB', 'NG', 'US'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.Host}/success`,
    cancel_url: `${process.env.Host}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
