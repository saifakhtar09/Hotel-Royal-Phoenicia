import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Section from '../ui/Section';

const rooms = [
  {
    title: 'Deluxe Suite',
    description: 'Spacious luxury suite with panoramic city views',
    price: '$299',
    imageUrl: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: ['King Bed', 'City View', '45 sqm', 'Balcony']
  },
  {
    title: 'Royal Suite',
    description: 'The ultimate in luxury accommodation',
    price: '$599',
    imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: ['King Bed', 'Ocean View', '85 sqm']
  },
  {
    title: 'Executive Room',
    description: 'Perfect for business travelers',
    price: '$199',
    imageUrl: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: ['Queen Bed', 'Desk Area', '35 sqm']
  }
];

const RoomsSection = () => {
  return (
    <Section id="rooms">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-4 block">
          Accommodations
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
          Luxury Rooms & Suites
        </h2>
        <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto">
          Each room is thoughtfully designed to provide the perfect blend of comfort, style, and modern amenities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <Card key={index} className="group">
            <div className="relative overflow-hidden">
              <img
                src={room.imageUrl}
                alt={room.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                From {room.price}/night
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <Card.Content>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {room.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {room.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {room.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Button className="w-full">
                Book Now
              </Button>
            </Card.Content>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default RoomsSection;