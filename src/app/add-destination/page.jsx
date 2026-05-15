"use client";

import { addDestination } from "@/lib/Action";
import {
    Button,
    Card,
    FieldError,
    Input,
    Label,
    ListBox,
    Select,
    TextArea,
    TextField,
} from "@heroui/react";
import { FiCalendar, FiTrello } from "react-icons/fi";

const AddTravelPackagePage = () => {

    return (
        <div className="min-h-screen bg-[#f5f5f5] py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <h1 className="text-5xl font-light text-black mb-10">
                    Add New Travel Package
                </h1>

                {/* Form Card */}
                <Card className="p-8 md:p-10 border border-gray-200 rounded-none shadow-none bg-white">
                    <form
                        // onSubmit={handleSubmit}
                        action={addDestination}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Destination Name */}
                            <div className="md:col-span-2">
                                <TextField
                                    name="destinationName"
                                    isRequired
                                >
                                    <Label className="mb-2 block text-sm font-medium text-black">
                                        Destination Name
                                    </Label>

                                    <Input
                                        placeholder="Bali Paradise"
                                        className="w-full"
                                    />

                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Country */}
                            <TextField
                                name="country"
                                isRequired
                            >
                                <Label className="mb-2 block text-sm font-medium text-black">
                                    Country
                                </Label>

                                <Input
                                    placeholder="Indonesia"
                                />

                                <FieldError />
                            </TextField>

                            {/* Category */}
                            <div>
                                <Label className="mb-2 block text-sm font-medium text-black">
                                    Category
                                </Label>

                                <Select
                                    name="category"
                                    placeholder="Beach"
                                    className="w-full"
                                >
                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="Beach">
                                                Beach
                                            </ListBox.Item>

                                            <ListBox.Item id="Mountain">
                                                Mountain
                                            </ListBox.Item>

                                            <ListBox.Item id="Adventure">
                                                Adventure
                                            </ListBox.Item>

                                            <ListBox.Item id="Luxury">
                                                Luxury
                                            </ListBox.Item>

                                            <ListBox.Item id="City">
                                                City
                                            </ListBox.Item>
                                            <ListBox.Item id="Forest">
                                                Forest
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Price */}
                            <TextField
                                name="price"
                                type="number"
                                isRequired
                            >
                                <Label className="mb-2 block text-sm font-medium text-black">
                                    Price (USD)
                                </Label>

                                <Input
                                    type="number"
                                    placeholder="e.g., 1299"
                                />

                                <FieldError />
                            </TextField>

                            {/* Duration */}
                            <TextField
                                name="duration"
                                isRequired
                            >
                                <Label className="mb-2 block text-sm font-medium text-black">
                                    Duration
                                </Label>

                                <Input
                                    placeholder="e.g., 7 Days/6 Nights"
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
                                    <Label className="mb-2 block text-sm font-medium text-black">
                                        Departure Date
                                    </Label>

                                    <div className="relative">
                                        <Input type="date" />

                                        <FiCalendar
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                            size={18}
                                        />
                                    </div>

                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Image URL */}
                            <div className="md:col-span-2">
                                <TextField
                                    name="imageUrl"
                                    isRequired
                                >
                                    <Label className="mb-2 block text-sm font-medium text-black">
                                        Image URL
                                    </Label>

                                    <Input
                                        type="url"
                                        placeholder="https://example.com/image.jpg"
                                    />

                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">
                                <TextField
                                    name="description"
                                    isRequired
                                >
                                    <Label className="mb-2 block text-sm font-medium text-black">
                                        Description
                                    </Label>

                                    <TextArea
                                        name="description"
                                        rows={6}
                                        placeholder="Describe the travel experience..."
                                    />

                                    <FieldError />
                                </TextField>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center justify-end gap-4 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                className="border border-red-400 text-red-500 rounded-none px-6"
                            >
                                <FiTrello size={16} />
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-none px-6"
                            >
                                Add Travel Package
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddTravelPackagePage;