class Api::NotesController < ApplicationController

  def search
    if params[:query].present?
      @notes = Note.where("title ~ ?", params[:query])
                   .where("body ~ ?", params[:query])
    else
      @notes = Note.none
    end
  end

  def index
    @user = current_user
    @notes = @user.notes
    render :index
  end

  def show
    @note = Note.find(note_params[:id])
    @tags = @note.tags
      render :show
  end

  def create
    new_params = note_params.reject {|h| h["tags"]}
    @note = Note.new(new_params)
    if note_params[:tags]
      @tags = []
      note_params[:tags].each do |tag|
        @tag = Tag.new({"name" => tag})
          if @tag.save
            @tags << @tag
          else
            @tag = Tag.find_by(name: tag)
            @tags << @tag
          end
      end
        @note.tags << @tags.uniq

    end
      if @note.save
        render :show
      else
        render @note.errors.full_messages, status: 422
      end
  end

  def update

    @note = Note.find(note_params[:id])
      if @note.update!(note_params)
        render :show
      else
        render @note.errors.full_messages, status: 422
      end
  end

  def destroy
    @note = Note.find(note_params[:id])
    @tags = @note.taggings
    @tags.each do |tag|
      tag.destroy
    end
    @note.destroy
      render :show
  end

  private
    def note_params
      params.require(:note).permit(:id, :title, :body, :notebook_id, :author_id, :tags => [])
    end

end
