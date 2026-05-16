

import { updateDestination } from "@/lib/Action";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select, Card } from "@heroui/react";
import { FaEdit, FaEnvelope } from "react-icons/fa";
import { FiCalendar, FiTrello } from "react-icons/fi";

function EditModal({ destination }) {
    const {
        imageUrl,
        country,
        destinationName,
        price,
        duration,
        description,
        category,
        date,
        _id
    } = destination;

    const destinationUpdateWrapper = async (formData) => {
        "use server"
        return await updateDestination(_id, formData)
    }

    return (
        <Modal>
            <Button variant="secondary"><FaEdit /> Edit Destination</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="max-w-2xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Destination</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we'll get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                {/* Form Card */}
                                <Card className="p-8 md:p-10 border border-gray-200 rounded-none shadow-none bg-white">
                                    <form
                                        // onSubmit={handleSubmit}
                                        action={destinationUpdateWrapper}
                                        className="space-y-8"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Destination Name */}
                                            <div className="md:col-span-2">
                                                <TextField
                                                    defaultValue={destinationName}
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
                                                defaultValue={country}
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
                                                    placeholder={[category]}
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
                                                defaultValue={price}
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
                                                defaultValue={duration}
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
                                                    defaultValue={date}
                                                    name="departureDate"
                                                    type="date"
                                                    isRequired
                                                >
                                                    <Label className="mb-2 block text-sm font-medium text-black">
                                                        Departure Date
                                                    </Label>

                                                    <div className="relative">
                                                        <Input type="date" />

                                                        {/* <FiCalendar
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                                            size={18}
                                                        /> */}
                                                    </div>

                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Image URL */}
                                            <div className="md:col-span-2">
                                                <TextField
                                                    defaultValue={imageUrl}
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
                                                    defaultValue={description}
                                                    name="description"
                                                    isRequired
                                                >
                                                    <Label className="mb-2 block text-sm font-medium text-black">
                                                        Description
                                                    </Label>

                                                    <TextArea

                                                        name="description"
                                                        rows={4}
                                                        placeholder="Describe the travel experience..."
                                                    />

                                                    <FieldError />
                                                </TextField>
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex items-center justify-end gap-4 pt-4">
                                            <Button
                                                slot="close"
                                                type="submit"
                                                className=" rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white  px-6"
                                            >
                                                Save Edit
                                            </Button>
                                        </div>
                                    </form>
                                </Card>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}


export default EditModal;