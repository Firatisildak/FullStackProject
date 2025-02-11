using MediatR;

namespace ETicaretAPI.Application.Features.Commands.CreatProduct
{
    public class CreateProductCommandRequest : IRequest<CreateProductCommandResponse>
    {
        public string Name { get; set; } = string.Empty;
        public int Stock { get; set; }
        public float Price { get; set; }
    }
}
