"use client";

import {
    FieldError,
    Input,
    Label,
    TextField,
    TextArea,
    Button,
    Card,
} from "@heroui/react";

const AddDestinationPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const destination = Object.fromEntries(formData.entries());

        // Convert price to number
        destination.price = Number(destination.price);

        try {
            const res = await fetch(
                `http://localhost:8000/destination`,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(destination),
                }
            );

            const data = await res.json();


            if (data.insertedId) {
                alert("Destination Added Successfully!");
                e.target.reset();
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold text-center mb-6">
                Add Destination
            </h1>

            <Card>
                <form
                    onSubmit={onSubmit}
                    className="p-10 space-y-8 max-w-3xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Destination Name */}
                        <div className="md:col-span-2">
                            <TextField name="destinationName" isRequired>
                                <Label>Destination Name</Label>

                                <Input
                                    placeholder="Bali Paradise"
                                    className="rounded-2xl"
                                />

                                <FieldError />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="country" isRequired>
                            <Label>Country</Label>

                            <Input
                                placeholder="Indonesia"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>

                        {/* Category */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Category
                            </label>

                            <select
                                name="category"
                                required
                                className="w-full border rounded-2xl px-4 py-3 outline-none"
                            >
                                <option value="">
                                    Select Category
                                </option>

                                <option value="Beach">
                                    Beach
                                </option>

                                <option value="Mountain">
                                    Mountain
                                </option>

                                <option value="City">
                                    City
                                </option>

                                <option value="Adventure">
                                    Adventure
                                </option>

                                <option value="Cultural">
                                    Cultural
                                </option>

                                <option value="Luxury">
                                    Luxury
                                </option>
                            </select>
                        </div>

                        {/* Price */}
                        <TextField
                            name="price"
                            type="number"
                            isRequired
                        >
                            <Label>Price (USD)</Label>

                            <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField name="duration" isRequired>
                            <Label>Duration</Label>

                            <Input
                                placeholder="7 Days / 6 Nights"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField
                                name="departureDate"
                                type="date"
                                isRequired
                            >
                                <Label>Departure Date</Label>

                                <Input
                                    type="date"
                                    className="rounded-2xl"
                                />

                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL */}
                        {/* <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>

                                <Input
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                    className="rounded-2xl"
                                />

                                <FieldError />
                            </TextField>
                        </div> */}

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField isRequired>
                                <Label>Description</Label>

                                <TextArea
                                    name="description"
                                    placeholder="Describe the travel experience..."
                                    className="rounded-3xl"
                                />

                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-cyan-500 text-white rounded-2xl"
                    >
                        Add Destination
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddDestinationPage;